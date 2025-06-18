import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ScholarshipApplicationList } from "./scholarshipApplication/ScholarshipApplicationList";
import { ScholarshipApplicationCreate } from "./scholarshipApplication/ScholarshipApplicationCreate";
import { ScholarshipApplicationEdit } from "./scholarshipApplication/ScholarshipApplicationEdit";
import { ScholarshipApplicationShow } from "./scholarshipApplication/ScholarshipApplicationShow";
import { ScholarshipList } from "./scholarship/ScholarshipList";
import { ScholarshipCreate } from "./scholarship/ScholarshipCreate";
import { ScholarshipEdit } from "./scholarship/ScholarshipEdit";
import { ScholarshipShow } from "./scholarship/ScholarshipShow";
import { StaffMemberList } from "./staffMember/StaffMemberList";
import { StaffMemberCreate } from "./staffMember/StaffMemberCreate";
import { StaffMemberEdit } from "./staffMember/StaffMemberEdit";
import { StaffMemberShow } from "./staffMember/StaffMemberShow";
import { EvaluationList } from "./evaluation/EvaluationList";
import { EvaluationCreate } from "./evaluation/EvaluationCreate";
import { EvaluationEdit } from "./evaluation/EvaluationEdit";
import { EvaluationShow } from "./evaluation/EvaluationShow";
import { ScholarshipProviderList } from "./scholarshipProvider/ScholarshipProviderList";
import { ScholarshipProviderCreate } from "./scholarshipProvider/ScholarshipProviderCreate";
import { ScholarshipProviderEdit } from "./scholarshipProvider/ScholarshipProviderEdit";
import { ScholarshipProviderShow } from "./scholarshipProvider/ScholarshipProviderShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { ShortlistingStageList } from "./shortlistingStage/ShortlistingStageList";
import { ShortlistingStageCreate } from "./shortlistingStage/ShortlistingStageCreate";
import { ShortlistingStageEdit } from "./shortlistingStage/ShortlistingStageEdit";
import { ShortlistingStageShow } from "./shortlistingStage/ShortlistingStageShow";
import { EligibilityCriteriaList } from "./eligibilityCriteria/EligibilityCriteriaList";
import { EligibilityCriteriaCreate } from "./eligibilityCriteria/EligibilityCriteriaCreate";
import { EligibilityCriteriaEdit } from "./eligibilityCriteria/EligibilityCriteriaEdit";
import { EligibilityCriteriaShow } from "./eligibilityCriteria/EligibilityCriteriaShow";
import { OutreachPartnerList } from "./outreachPartner/OutreachPartnerList";
import { OutreachPartnerCreate } from "./outreachPartner/OutreachPartnerCreate";
import { OutreachPartnerEdit } from "./outreachPartner/OutreachPartnerEdit";
import { OutreachPartnerShow } from "./outreachPartner/OutreachPartnerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Directus Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ScholarshipApplication"
          list={ScholarshipApplicationList}
          edit={ScholarshipApplicationEdit}
          create={ScholarshipApplicationCreate}
          show={ScholarshipApplicationShow}
        />
        <Resource
          name="Scholarship"
          list={ScholarshipList}
          edit={ScholarshipEdit}
          create={ScholarshipCreate}
          show={ScholarshipShow}
        />
        <Resource
          name="StaffMember"
          list={StaffMemberList}
          edit={StaffMemberEdit}
          create={StaffMemberCreate}
          show={StaffMemberShow}
        />
        <Resource
          name="Evaluation"
          list={EvaluationList}
          edit={EvaluationEdit}
          create={EvaluationCreate}
          show={EvaluationShow}
        />
        <Resource
          name="ScholarshipProvider"
          list={ScholarshipProviderList}
          edit={ScholarshipProviderEdit}
          create={ScholarshipProviderCreate}
          show={ScholarshipProviderShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="ShortlistingStage"
          list={ShortlistingStageList}
          edit={ShortlistingStageEdit}
          create={ShortlistingStageCreate}
          show={ShortlistingStageShow}
        />
        <Resource
          name="EligibilityCriteria"
          list={EligibilityCriteriaList}
          edit={EligibilityCriteriaEdit}
          create={EligibilityCriteriaCreate}
          show={EligibilityCriteriaShow}
        />
        <Resource
          name="OutreachPartner"
          list={OutreachPartnerList}
          edit={OutreachPartnerEdit}
          create={OutreachPartnerCreate}
          show={OutreachPartnerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
