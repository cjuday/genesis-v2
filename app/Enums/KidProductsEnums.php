<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class KidProductsEnums extends Enum
{
    const T_Shirts_Tops = 1;
    const Sweaters_Sweat_Shirts = 2;
    const Trousers = 3;
    const Jeans = 4;
    const Shorts = 5;
}
