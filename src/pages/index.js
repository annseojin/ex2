import Layout from '../components/Layout'
import Link from 'next/link'

import { skills, teamprojects, projects, repo } from '../profile'

export const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/p1.JPG" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>
                <br />
                안서진 (An seo jin)
              </h1>
              <h3>
                <br />
                중부대학교 정보보호학전공 92212893
              </h3>
              <br />
              <h3>✨ Contact me ✨</h3>
              <br />
              <p>
                <a href="https://github.com/annseojin" target="_blank">
                  <img
                    src="https://img.shields.io/badge/github-181717?style=plastic&logo=github&logoColor=white"
                    width={100}
                    height={30}
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.notion.so/b5b73aad2b77443498943b806f225343"
                  target="_blank"
                >
                  <img
                    src="https://img.shields.io/badge/Notion-000000?style=plastic&logo=Notion&logoColor=white"
                    width={100}
                    height={30}
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://sejin0902.tistory.com/" target="_blank">
                  <img
                    src="https://img.shields.io/badge/Tistory-000000?style=plastic&logo=Tistory&logoColor=white"
                    width={100}
                    height={30}
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <br />
                <br />
                <a href="https://instagram.com/03_0902/" target="_blank">
                  <img
                    src="https://img.shields.io/badge/03_0902-E4405F?style=plastic&logo=instagram&logoColor=white"
                    width={100}
                    height={30}
                  />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="mailto:92212893@jmail.ac.kr" target="_blank">
                  <img
                    src="https://img.shields.io/badge/92212893@jmail.ac.kr-EA4335?style=plastic&logo=Gmail&logoColor=white"
                    width={220}
                    height={30}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* teamprojects */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Team projects</h1>
            <ul>
              {/* List Item teamprojects */}
              {teamprojects.map(({ title }, index) => (
                <li key={index}>
                  <h2>{title}</h2>
                  <h3>
                    온라인 쇼핑몰
                    <br />
                    여러가지 기능을 최대한 구현해서 합치려는 취지를 뜻함.
                  </h3>
                  <img src="/p6.jpg" width={500} height={330} />
                </li>
              ))}
            </ul>
            <Link href="https://ex-sigma.vercel.app/" className="btn btn-light">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* profile */}
    <section>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Profile</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-300">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                        width={120}
                        height={480}
                      />
                    </div>
                    <div className="card-body">
                      <h2>{name}</h2>
                      <h3>{description}</h3>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* repo */}
    <section>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Projects</h1>
              </div>
              {repo.map(({ name, url, image }, index) => (
                <div className="col-md-6 p-2" key={index}>
                  <div className="card h-200">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                        width={400}
                        height={300}
                      />
                    </div>
                    <div className="card-body">
                      <h2>{name}</h2>
                      <h3>{url}</h3>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-md-12 mt-4">
                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Index
