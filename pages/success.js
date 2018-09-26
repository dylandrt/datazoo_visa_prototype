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
    axios.get(`http://172.17.160.49:3000/applicants/${localStorage.id}`)
    .then(res => {
      if (res.data.person) {
        let data = res.data.person
        this.setState({data})
        console.log(this.state.data)
      } else {
        console.log('user has no data')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  componentDidMount() {
    this.getUserInfo()
  }

  render() {

    const personalInfo = (value) => {
      if (this.state.data.personalInfo[value]) {
        return this.state.data.personalInfo[value]
      } else {
        return 'NO VALUE'
      }
    }

    return (
      <section className="container">
        <div className="form-page">
          <Heading title="Success" />
          <table>
            <tbody>
              <tr>
                <th>Full Name</th>
                <td>{personalInfo('fullName')}</td>
              </tr>
              <tr>
                <th>Other Names</th>
                <td>{personalInfo('otherNames')}</td>
              </tr>
               <tr>
                 <td>Date of Birth</td>
                 <td>{personalInfo('dateOfBirth')}</td>
               </tr>
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}