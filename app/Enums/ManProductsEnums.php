<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class ManProductsEnums extends Enum
{
    const T_Shirts = 1;
    const Polo = 2;
    const Bottom = 3;
    const Shirts = 4;
    const Sweat_Shirts = 5;
    const Trousers = 6;
    const Sweaters = 7;
    const Jacket = 8;
}
