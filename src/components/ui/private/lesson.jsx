import React from 'react'
import { Calendar, Check, Menu, Time } from '../../../assets/icons'

const lessonTime = [
  {
    name: 'Buổi 2',
    time: '11:30, Thứ 5 tuần sau',
    author: {
      image: '/images/avatar.png',
      name: 'Serena',
    },
    status: 'done',
    cover: '',
  },
  {
    name: 'Buổi 3',
    time: '11:30, Thứ 5 tuần sau',
    author: {
      image: '/images/avatar.png',
      name: 'Serena',
    },
    status: 'progress',
    cover: '',
  },
  {
    name: 'Buổi 4',
    time: '11:30, Thứ 5 tuần sau',
    author: {
      image: '/images/avatar.png',
      name: 'Serena',
    },
    status: 'refuse',
    cover: '',
  },
]

export default function Lesson() {
  return (
    <div className="section rounded-[12px]  bg-[#FDF9F3] p-4">
      <div className="flex gap-2 align-middle my-3">
        <Calendar />
        <h1 className="font-bold">Bạn đã đặt lịch tham gia 4 buổi học</h1>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
        <div className=" rounded-2xl bg-white p-4 border-1 border-[#EDF2F7] drop-shadow-md">
          <div className="flex gap-3">
            <div>
              <img src="/images/cover.png" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">Do you like street food do you like street food </h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <img src="/images/avatar.png" alt="" />
                  <span>Serena</span>
                </div>
                <div className="flex items-center">
                  <div className="flex bg-[#48BB78]/[0.1] rounded-full gap-2 items-center justify-center px-2 py-1">
                    <Check />
                    <span className="color-[#48BB78]">Đã xác nhận</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center  bg-[#EDF2F7] rounded-full p-2">
                  <Time />
                </div>
                <span>11:30, Thứ 5</span>
              </div>
              <div className="flex justify-end">
                <button className="rounded-full border-2 p-1 my-2 border-[#FF6D03] text-[#FF6D03] px-4">Vào học</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="drop-shadow-md rounded-2xl bg-white">
            {lessonTime.map((item, i) => (
              <div className="mb-1">
                <div className="flex items-center p-4 justify-between border-1 border-[#EDF2F7]">
                  <div className="flex items-center gap-24">
                    <span className="text-lg font-bold">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex justify-center items-center  bg-[#EDF2F7] rounded-full p-2">
                        <Time />
                      </div>
                      <span className="text-md">{item.time}</span>
                    </div>
                    <div className="flex gap-2 ">
                      <div className="flex items-center gap-2">
                        <img src="/images/avatar.png" alt="" />
                        <span>{item.author.name}</span>
                      </div>
                      <div className="flex items-center">
                        {item.status === 'done' && (
                          <div className="flex bg-[#48BB78]/[0.1] rounded-full gap-2 items-center justify-center px-2 py-1">
                            <Check />
                            <span className="text-[#48BB78]">Đã xác nhận</span>
                          </div>
                        )}
                        {item.status === 'progress' && (
                          <div className="flex bg-[#2971F0]/[0.1] rounded-full gap-2 items-center justify-center px-2 py-1">
                            <span className="text-[#2971F0]">Chờ xác nhận</span>
                          </div>
                        )}
                        {item.status === 'refuse' && (
                          <div className="flex bg-[#1A202C]/[0.1] rounded-full gap-2 items-center justify-center px-2 py-1">
                            <span className="text-[#1A202C]">Từ chối</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    {item.status === 'refuse' ? (
                      <div className="flex justify-end">
                        <button className="rounded-full border-2 p-1  border-[#FF6D03] text-[#FF6D03] px-4">
                          Đặt lại
                        </button>
                      </div>
                    ) : (
                      <Menu />
                    )}
                  </div>
                </div>
                {i !== lessonTime.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
