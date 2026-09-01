import teacher from '../data/teacher.js'
import { renderNavbar, renderFooter } from '../components.js'
import { initReveal } from '../reveal.js'

document.title = `About ${teacher.name} | Sociology Teacher`
renderNavbar('about.html')
renderFooter()

document.getElementById('about-title').textContent = `About ${teacher.name}`

const portrait = document.getElementById('about-portrait')
portrait.src = teacher.portrait.src
portrait.alt = teacher.portrait.alt

const { about } = teacher

document.getElementById('glance-list').innerHTML = about.atAGlance
  .map((fact) => `<div><dt>${fact.label}</dt><dd>${fact.value}</dd></div>`)
  .join('')

document.getElementById('about-introduction').textContent = about.introduction
document.getElementById('about-academic-background').textContent = about.academicBackground
document.getElementById('about-teaching-experience').textContent = about.teachingExperience
document.getElementById('about-subjects-levels').textContent = about.subjectsAndLevels
document.getElementById('about-teaching-philosophy').textContent = about.teachingPhilosophy

document.getElementById('expertise-list').innerHTML = about.areasOfExpertise
  .map((area) => `<li>${area}</li>`)
  .join('')

initReveal()
