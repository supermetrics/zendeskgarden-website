/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as UserIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} size="extraextrasmall">
        <UserIcon role="img" aria-label="extra extra small user avatar" />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} size="extrasmall">
        <UserIcon role="img" aria-label="extra small user avatar" />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} size="small">
        <UserIcon role="img" aria-label="small user avatar" />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} size="medium">
        <UserIcon role="img" aria-label="medium user avatar" />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} size="large">
        <UserIcon role="img" aria-label="large user avatar" />
      </Avatar>
    </Col>
  </Row>
);

export default Example;
