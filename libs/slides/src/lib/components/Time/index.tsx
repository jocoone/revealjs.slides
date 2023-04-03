import React from 'react';
import format from 'date-fns/format';

export interface TimeProps {
    time: Date;
    dateFormat?: string
}

const Time: React.FC<TimeProps> = ({time, dateFormat = 'MMM dd, yyyy'}) => {
    return <time>
        {format(time, dateFormat)}
    </time>
}

export default Time;
