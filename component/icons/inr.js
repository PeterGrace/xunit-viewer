import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1345 470v102q0 14-9 23t-23 9h-168q-23 144-129 234t-276 110q167 178 459 536 14 16 4 34-8 18-29 18h-195q-16 0-25-12-306-367-498-571-9-9-9-22v-127q0-13 9.5-22.5t22.5-9.5h112q132 0 212.5-43t102.5-125h-427q-14 0-23-9t-9-23v-102q0-14 9-23t23-9h413q-57-113-268-113h-145q-13 0-22.5-9.5t-9.5-22.5v-133q0-14 9-23t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9h-233q47 61 64 144h171q14 0 23 9t9 23z' }));;
}