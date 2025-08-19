/* 
    ABSTRACT OPERATIONS - (operations js use internally to do type conversion and for other operations)

    toBoolean - 
    returns true or false for an input 
    falsy values(values for which toBoolean returns false) - : 
    undefined, null, +0, -0, NaN, "", false
    for any other values other than false values toBoolean returns true

    toNumber -:
    argument                result
    undefined               NaN
    null                    +0
    string of digit         convert string to number
    symbol                  type error exception

    addition operator (+)-
    if either rhs or lhs is a string then it converts both to string and returns string concatenation
    if both the values are primitive and not strings then it converts both to number and adds them

    Difference between == and ===
    == -> it check type of both the operands and if type is different it tries to convert both operands to the same type and if type is same then it returns result after performing === operation i.e implicit conversion is done
    === -> if types of both operands is different then it returns false i.e no implicit conversion is done
    if either is NaN then return false
    if x is equal to y and type is also same then return true
    if x is +0 and y is -0 or vice versa return true
    in any other case of type number return false

*/ 