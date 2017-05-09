import { signalLater } from "../util/operation_group"
import { ensureCursorVisible } from "../display/scrolling"
import { clipPos, cmp, Pos } from "../line/pos"
import { getLine } from "../line/utils_line"
import { hasHandler, signal, signalCursorActivity } from "../util/event"
import { lst, sel_dontScroll } from "../util/misc"

import { addSelectionToHistory } from "./history"
import { normalizeSelection, Range, Selection, simpleSelection } from "./selection"

// The 'scroll' parameter given to many of these indicated whether
// the new cursor position should be scrolled into view after
// modifying the selection.

// If shift is held or the extend flag is set, extends a range to
// include a given position (and optionally a second position).
// Otherwise, simply returns the range between the given positions.
// Used for cursor motion and such.
export function extendRange(doc, range, head, other) {
  if (doc.cm && doc.cm.display.shift || doc.extend) {
    let anchor = range.anchor
    if (other) {
      let posBefore = cmp(head, anchor) < 0
      if (posBefore != (cmp(other, anchor) < 0)) {
        anchor = head
        head = other
      } else if (posBefore != (cmp(head, other) < 0)) {
        head = other
      }
    }
    return new Range(anchor, head)
  } else {
    return new Range(other || head, head)
  }
}

// Extend the primary selection range, discard the rest.
export function extendSelection(doc, head, other, options) {
  setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options)
}

// Extend all selections (pos is an array of selections with length
// equal the number of selections)
export function extendSelections(doc, heads, options) {
  let out = []
  for (let i = 0; i < doc.sel.ranges.length; i++)
    out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null)
  let newSel = normalizeSelection(out, doc.sel.primIndex)
  setSelection(doc, newSel, options)
}

// Updates a single range in the selection.
export function replaceOneSelection(doc, i, range, options) {
  let ranges = doc.sel.ranges.slice(0)
  ranges[i] = range
  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options)
}

// Reset the selection to a single range.
export function setSimpleSelection(doc, anchor, head, options) {
  setSelection(doc, simpleSelection(anchor, head), options)
}

// Give beforeSelectionChange handlers a change to influence a
// selection update.
function filterSelectionChange(doc, sel, options) {
  let obj = {
    ranges: sel.ranges,
    update: function(ranges) {
      this.ranges = []
      for (let i = 0; i < ranges.length; i++)
        this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                   clipPos(doc, ranges[i].head))
    },
    origin: options && options.origin
  }
  signal(doc, "beforeSelectionChange", doc, obj)
  if (doc.cm) signal(doc.cm, "bef