/*
 *  Copyright 2023 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { Col, Row, Tabs } from 'antd';
import { SummaryPanel } from 'components/DataQuality/SummaryPannel/SummaryPanel.component';
import DataQualityTab from 'components/ProfilerDashboard/component/DataQualityTab';
import { DataQualityTabProps } from 'components/ProfilerDashboard/profilerDashboard.interface';
import TestSuitePipelineTab from 'components/TestSuitePipelineTab/TestSuitePipelineTab.component';
import { EntityTabs } from 'enums/entity.enum';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const QualityTab = ({
  isLoading,
  testCases,
  onTestCaseResultUpdate,
  onTestUpdate,
}: DataQualityTabProps) => {
  const { t } = useTranslation();
  const tabs = useMemo(
    () => [
      {
        label: t('label.test-case-plural'),
        key: EntityTabs.TEST_CASES,
        children: (
          <DataQualityTab
            isLoading={isLoading}
            testCases={testCases}
            onTestCaseResultUpdate={onTestCaseResultUpdate}
            onTestUpdate={onTestUpdate}
          />
        ),
      },
      {
        label: t('label.pipeline'),
        key: EntityTabs.PIPELINE,
        children: <TestSuitePipelineTab />,
      },
    ],
    [isLoading, testCases, onTestUpdate, onTestCaseResultUpdate]
  );

  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <SummaryPanel />
      </Col>
      <Col span={24}>
        <Tabs items={tabs} />
      </Col>
    </Row>
  );
};