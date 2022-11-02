<?php

if (!function_exists('isAdmin')) {
    function isAdmin()
    {
        return auth()->user()->type == 'admin' ? true : false;
    }
}

if (!function_exists('getCountryCodes')) {
    function getCountryCodes()
    {
        return config('country_code');
    }
}

if (!function_exists('getCurrencyCode')) {
    function getCurrencyCode(string $country_code)
    {
        return config('currency_code')[$country_code];
    }
}
