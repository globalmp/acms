<?php

namespace Faker\Provider\sr_Latn_RS;

class Address extends \Faker\Provider\Address
{
    protected static $postcode = array('#####');

    protected static $streetPrefix = array(
        'Bulevar',
    );

    protected static $street = array(
        'Kralja Milana', 'Cara Dušana', 'Nikole Tesle', 'Mihajla Pupina', 'Nikole Pašića',
    );

    protected static $streetNameFormats = array(
        '{{street}}',
        '{{streetPrefix}} {{street}}',
    );

    protected static $streetAddressFormats = array(
        '{{streetName}} {{buildingNumber}}',
    );

    protected static $cityFormats = array(
        '{{cityName}}',
    );

    /**
     * @link http://sr.wikipedia.org/sr-el/%D0%93%D1%80%D0%B0%D0%B4_%D1%83_%D0%A1%D1%80%D0%B1%D0%B8%D1%98%D0%B8
     */
    protected static $cityNames = array(
        'Beograd', 'Valjevo', 'Vranje', 'Zaječar', 'Zrenjanin', 'Jagodina', 'Kragujevac', 'Kraljevo', 'Kruševac', 'Leskovac', 'Loznica', 'Niš', 'Novi Pazar', 'Novi Sad', 'Pančevo', 'Požarevac', 'Priština', 'Smederevo', 'Sombor', 'Sremska Mitrovica', 'Subotica', 'Užice', 'Čačak', 'Šabac',
    );

    /**
     * @link https://github.com/umpirsky/country-list/blob/master/country/cldr/sr_Latn/country.php
     */
    protected static $country = array(
        'Ostrvo Asension', 'Andora', 'Ujedinjeni Arapski Emirati', 'Avganistan', 'Antigva i Barbuda', 'Angvila', 'Albanija', 'Armenija', 'Holandski Antili', 'Angola', 'Antarktika', 'Argentina', 'Američka Samoa', 'Austrija', 'Australija', 'Aruba', 'Alandska ostrva', 'Azerbejdžan', 'Bosna i Hercegovina', 'Barbados', 'Bangladeš', 'Belgija', 'Burkina Faso', 'Bugarska', 'Bahrein', 'Burundi', 'Benin', 'Sv. Bartolomej', 'Bermuda', 'Brunej', 'Bolivija', 'Brazil', 'Bahami', 'Butan', 'Buve Ostrva', 'Bocvana', 'Belorusija', 'Belise', 'Kanada', 'Kokos (Keling) Ostrva', 'Demokratska Republika Kongo', 'Centralno Afrička Republika', 'Kongo', 'Švajcarska', 'Obala Slonovače', 'Kukova Ostrva', 'Čile', 'Kamerun', 'Kina', 'Kolumbija', 'Ostrvo Kliperton', 'Kostarika', '