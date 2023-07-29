import React, { useState } from "react"

export const Tab = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <div id="tab">
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Our Mission
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Objectives
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            We Cell
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <p className="text-gray-400 text-md">
              The mission of The Innovation and Entrepreneurship Development
              Centre (IEDC) is to promote innovation and entrepreneurship by
              creating a culture of entrepreneurship in educational
              institutions. It aims to create awareness, provide incubation
              support, develop skills, and promote collaboration between
              industries and academia to foster the creation of successful
              ventures that contribute to the economic growth of the country.
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <p className="text-gray-400 text-md">
              The Innovation and Entrepreneurship Development Centre (IEDC) is a
              platform that provides support and guidance to students and
              faculty to foster entrepreneurship. Its primary objective is to
              create an entrepreneurial culture in educational institutions.
              This is achieved by creating awareness, providing incubation
              support to startups, developing skills through training and
              mentorship programs, and promoting collaboration between
              industries and academia. IEDCs play a vital role in fostering
              entrepreneurship, and it is essential for educational institutions
              to establish them to promote innovation and entrepreneurship.
              <br />
              <br />
              - Promote entrepreneurial mindset: The club aims to encourage
              students to adopt an entrepreneurial mindset by thinking
              creatively, identifying opportunities, and taking calculated
              risks.
              <br />
              <br />
              - Skill development: The club focuses on developing practical
              skills necessary for entrepreneurship, such as leadership,
              problem-solving, communication, teamwork, and business management.
              <br />
              <br />
              - Knowledge sharing: The club organizes events where successful
              entrepreneurs and industry experts share their experiences,
              insights, and knowledge with students, helping them gain a better
              understanding of entrepreneurship.
              <br />
              <br />
              - Networking opportunities: The club facilitates events and
              activities that allow students to connect with fellow
              entrepreneurs, mentors, investors, and professionals from various
              industries, enabling valuable networking opportunities.
              <br />
              <br />- Incubation and support: The club provides support to
              students in launching their startup ventures, offering resources,
              mentorship, guidance on business planning, and access to funding
              opportunities.
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <p className="text-gray-400 text-md">
              Women Entrepreneurship Cell A world of million opportunities
              awaits outside and this is one of the very few chances to grab the
              heights. Stay ahead of your league by making the first step into
              the world of women entrepreneurship. IEDC Bootcamp College of
              Engineering, Chengannur launches Women Entrepreneurship Cell a
              Women Lead Initiative coming to you in a new face and new
              structure with the perfect lineup of the best to leave you spell
              bound. Prime yourself for mind boggling WE experience !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
