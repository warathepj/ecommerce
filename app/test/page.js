'use client';

import React, { useEffect, useState } from 'react';
import EnvVariable from '../../pages/actions/test';

function ClientComponent() {
    const [theVariable, setTheVariable] = useState(undefined);

    useEffect(() => {
        EnvVariable().then(result => {
            setTheVariable(result.theVariable);
        });
    }, []);

    if (theVariable) {
        return (
            <p>{theVariable}</p>
        );
    }

    return null;
}

export default ClientComponent;
