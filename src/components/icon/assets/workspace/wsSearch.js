/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';
const OuiIconWsSearch = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.048 11.074 15 14.025l-.975.975-2.951-2.952A6.205 6.205 0 0 1 1 7.202 6.205 6.205 0 0 1 7.203 1a6.205 6.205 0 0 1 4.845 10.074Zm-1.382-.512a4.823 4.823 0 0 0-3.463-8.184 4.823 4.823 0 0 0-4.825 4.825 4.823 4.823 0 0 0 8.184 3.463l.104-.104ZM8.015 4.567a1.379 1.379 0 1 0 1.823 1.824 2.758 2.758 0 1 1-5.392.812 2.757 2.757 0 0 1 3.569-2.636Z" />
  </svg>
);
export const icon = OuiIconWsSearch;
