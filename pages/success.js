import Link from 'next/link'
import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'

export default class NewZealandContacts extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        personalInfo: {
          familyName: '',
          firstName: '',
          dateOfBirth: '',
          otherNames: '',
          citizenship: '',
          placeOfBirth: '',
          chineseCommercialCode: '',
          chineseNationalId: '',
          chineseCardNo: '',
          passportNo: '',
          dateOfIssue: '',
          countryOfBirth: '',
          dateOfExpiry: '',
          gender: ''
        },
        residentialInfo: {
          flatNo: '',
          entranceNo: '',
          buildingNo: '',
          streetNo: '',
          streetName: '',
          complexName: '',
          district: '',
          province: '',
          telephone: '',
          email: ''
        },
        workAndEducation: {
          occupation: '',
          companyName: '',
          companyBuildingName: '',
          companyStreetNo: '',
          companyStreetName: '',
          companyDistrict: '',
          companyProvince: '',
          companyCity: '',
          companyTelephone: '',
          companyEmail: '',
          attendanceDateStart: '',
          attendanceDateEnd: '',
          institutionName: '',
          studyProgramme: ''
        },
        militaryHistory: [{
          militaryRank: '',
          militaryUnit: '',
          militaryService: '',
          militaryDateStart: '',
          militaryDateEnd: ''
        }],
        relationships: {
          familyMemberName: '',
          familyMemberRelationship: '',
          familyMemberDateOfBirth: ''
        },
        visaType: {
          visaType: '',
          visaOtherInput: '',
          visaDateStart: '',
          visaDateEnd: '',
          visaBusinessName: '',
          visaBusinessAddress: '',
          visaBusinessTelephone: '',
          visaBusinessEmail: '',
          visaWorkName: '',
          visaWorkAddress: '',
          visaWorkTelephone: '',
          visaWorkEmail: '',
          visaStudyArea: '',
          visaStudyProgramme: '',
          visaStudyInstitution: '',
          visaStudyStartDate: '',
          visaStudyEndDate: ''
        },
        nzContacts: [{
          nzContactName: '',
          nzContactAddress: '',
          nzContactTelephone: '',
          nzContactEmail: ''
        }]
      }
    }
  }

  getUserInfo() {
  }
  
  componentDidMount() {
  }

  render() {

    return (
      <section className="container">
        <div className="form-page">
          <Heading title="Success" />
          <h2 className="subheading">
            To be completed
          </h2>
        </div>
      </section>
    )
  }
}