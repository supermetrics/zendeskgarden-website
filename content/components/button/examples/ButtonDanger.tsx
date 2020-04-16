/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const StyledCol = styled(Col)`
  margin-bottom: ${p => p.theme.space.sm};
  text-align: center;
`;

const Example = () => {
  return (
    <Grid>
      <Row alignItems="center">
        <StyledCol>
          <Button isPrimary isDanger>
            Danger
          </Button>
        </StyledCol>
        <StyledCol>
          <Button isDanger>Danger</Button>
        </StyledCol>
        <StyledCol>
          <Button isBasic isDanger>
            Danger
          </Button>
        </StyledCol>
      </Row>
    </Grid>
  );
};

export default Example;
