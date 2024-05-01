import React, { Component } from 'react'
import { Icon } from '@iconify/react'
import typescriptIcon from '@iconify/icons-logos/typescript-icon'
import nodejs from '@iconify/icons-logos/nodejs'
import javascript from '@iconify/icons-logos/javascript'
import { FaFilePdf } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'

class About extends Component {
  componentDidMount() {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out'
    })
  }

  componentDidUpdate() {
    AOS.refresh()
  }

  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = 'images/' + this.props.sharedBasicInfo.image
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about
      var hello = this.props.resumeBasicInfo.description_header
      var about = this.props.resumeBasicInfo.description
      var Cv_Link = this.props.resumeBasicInfo.Cv_Link
      var Pdf = this.props.resumeBasicInfo.Pdf
    }
    return (
      <section data-aos="fade-up" id="about">
        <div className="col-md-12">
          <h1 style={{ color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: 'auto' }}>
                  <img height="250px" src={profilepic} alt="Avatar placeholder" />
                  <Icon icon={typescriptIcon} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                  <Icon icon={nodejs} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                  <Icon icon={javascript} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span> &nbsp;{' '}
                    <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span> &nbsp;{' '}
                    <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: 'auto',
                      fontSize: '132%',
                      lineHeight: '200%'
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br />
                    <span>{Pdf}</span>
                    <a href={Cv_Link} target="_blank" rel="noopener noreferrer">
                      <FaFilePdf size={32} className="pdfIcon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
