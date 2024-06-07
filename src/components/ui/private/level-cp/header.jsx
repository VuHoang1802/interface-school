import React from 'react'
import { ArrowLeft } from '../../../../assets/icons'

export default function LevelHeader({ valueLevel }) {
  return (
    <div className="flex items-center text-lg gap-2 py-4">
      <a href="">
        <ArrowLeft />
      </a>
      <h1 className="text-2xl font-semibold">{valueLevel}</h1>
    </div>
  )
}
