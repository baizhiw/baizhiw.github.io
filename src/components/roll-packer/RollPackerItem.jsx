import React from 'react';

export default function RollPackerItem({children, ...props}) {
    return <li {...props}>{children}</li>;
}
