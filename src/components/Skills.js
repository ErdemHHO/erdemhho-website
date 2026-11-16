import React, { Component } from 'react'
import { Icon } from '@iconify/react'
import AOS from 'aos'
import 'aos/dist/aos.css'

class Skills extends Component {
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
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills
      var typeLabels = this.props.resumeBasicInfo.skill_types || {}
      var icons = this.props.sharedSkills.icons
      var types = icons.reduce((acc, skill) => (acc.includes(skill.type) ? acc : acc.concat(skill.type)), [])
      var skills = types.map((type) => (
        <div className="skills-group" key={type}>
          {typeLabels[type] ? <h2 className="skills-group-title">{typeLabels[type]}</h2> : null}
          <ul className="list-inline mx-auto skill-icon">
            {icons
              .filter((skill) => skill.type === type)
              .map((skill) => (
                <li className="list-inline-item" key={skill.name}>
                  <div className="text-center skills-tile" data-aos="fade-up">
                    {skill.iconify ? (
                      <Icon icon={skill.iconify} className="skill-logo" aria-hidden="true" />
                    ) : (
                      <i className={skill.class}></i>
                    )}
                    <p className="skills-name">{skill.name}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-10 mx-auto text-center">{skills}</div>
        </div>
      </section>
    )
  }
}

export default Skills
