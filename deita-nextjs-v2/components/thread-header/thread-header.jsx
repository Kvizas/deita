import React from 'react'

import Heading from '../../components/heading/heading';
import { parseRelativeTimeString } from '../../helpers/time-helper';

export default function ThreadHeader({ thread }) {
  return (
    <>
        <Heading level={1} styleLevel={3} style={{ margin: ".5rem 0" }}>{thread.title}</Heading>
        Paskelbta prieš {parseRelativeTimeString(thread.created)}, {
            new Date(thread.created).toLocaleString('lt-LT', {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
            })
        }
    </>
  )
}
