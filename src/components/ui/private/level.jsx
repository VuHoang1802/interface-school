import React from 'react'
import LessonDetailInfoItem from './level-cp/detail'
import LevelHeader from './level-cp/header'

export default function Level() {
  return (
    <div className=" container mx-auto px-24">
      <LevelHeader valueLevel="Beginner" />
      <LessonDetailInfoItem />
    </div>
  )
}
