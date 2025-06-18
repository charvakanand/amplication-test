import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SCHOLARSHIPPROVIDER_TITLE_FIELD } from "./ScholarshipProviderTitle";

export const ScholarshipProviderShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contactEmail" source="contactEmail" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="onboardingStatus" source="onboardingStatus" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Scholarship"
          target="scholarshipProviderId"
          label="Scholarships"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="isPublished" source="isPublished" />
            <ReferenceField
              label="ScholarshipProvider"
              source="scholarshipprovider.id"
              reference="ScholarshipProvider"
            >
              <TextField source={SCHOLARSHIPPROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ShortlistingStage" source="shortlistingStage" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
