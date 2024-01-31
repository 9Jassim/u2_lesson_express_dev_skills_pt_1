const Skill = require('../models/skill')

const index = (req, res) => {
  const skills = Skill.getAll()
  const title = 'Skills'
  res.render('skills/index', { skills, title })
}

const show = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/show', { skill })
}

const newSkill = (req, res) => {
  res.render('skills/new')
}

const create = (req, res) => {
  Skill.create(req.body)
  res.redirect('/skills')
}

const removeSkill = (req, res) => {
  Skill.removeSkill(req.params.id)
  res.redirect('/skills')
}

const edit = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/edit', { skill })
}

const update = (req, res) => {
  Skill.update(req.params.id, req.body.skill, req.body.experiance)
  res.redirect(`/skills/${req.params.id}`)
}

module.exports = { index, show, newSkill, create, removeSkill, edit, update }
