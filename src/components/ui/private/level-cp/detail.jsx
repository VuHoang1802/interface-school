import React from 'react'
import { ArrowSecordRight, Check, Lock, Question, Time } from '../../../../assets/icons'

export default function LessonDetailInfoItem() {
  const data = {
    target: 17,
    progress: 2,
    courses: [
      {
        title: 'Should same-sex marriages be legalized in Vietnam?',
        author: {
          name: 'Serena',
          avatar: '/images/avatar.png',
        },
        cover: '/images/',
      },
    ],
  }
  return (
    <div>
      <div className="bg-white">
        <div className="h-20 flex items-center justify-center pb-5 text-center font-semibold bg-cover bg-no-repeat bg-center bg-[url('/images/bg1.png')]">
          <h3 className="text-2xl">Beginner 1</h3>
        </div>
        <div className="flex justify-between gap-4 p-6 text-lg font-semibold">
          <span>Mục tiêu học</span>
          <div className="flex flex-1 border-2 border-[#48BB78] gap-1 p-1 rounded-md">
            {Array(data.target)
              .fill(null)
              .map((x, i) => {
                if (i < data.progress) return <div className="h-[20px] w-[20px] p-1 bg-[#48BB78] rounded-md" />
              })}
          </div>
          <div>
            {data.progress}/{data.target}
          </div>
          <div className="flex items-center gap-2">
            <a href="" className="text-[#2971F0]">
              Chi tiết
            </a>
            <ArrowSecordRight />
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline-container">
          <div className="timeline-continue">
            {Array(data.target)
              .fill(null)
              .map((x, i) => {
                if (i < data.progress) {
                  return (
                    <div className={`row timeline-${i % 2 === 0 ? 'left' : 'right'}`}>
                      <div className="timeline-date flex items-center justify-center relative after:bg-no-repeat after:bg-[url('/images/check.svg')]"></div>
                      <div>
                        <div className="timeline-box">
                          <div className="timeline-icon">
                            <i className="fa fa-gift"></i>
                          </div>
                          <div className="timeline-text">
                            <div className="flex gap-8 w-full">
                              <div className="flex flex-col gap-2">
                                <span className="bg-[#E2E8F0] w-24  rounded-lg flex items-center justify-center">
                                  <span>Lesson 1</span>
                                </span>
                                <h3 className=" font-medium text-xl  text-left">
                                  Should same-sex marriages be legalized in Vietnam?
                                </h3>
                                <div className="flex gap-2">
                                  <div className="flex items-center gap-2">
                                    <img src="/images/avatar.png" alt="" />
                                    <span>Serena</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <img width="100%" src="/images/cover2.png" alt="" />
                              </div>
                            </div>
                            <hr className="my-4" />
                            <div className="flex align-middle text-lg font-semibold text-[#2971F0] gap-8">
                              <button>Làm bài tập</button>
                              <button>Tài liệu</button>
                              <button>Học lại</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                } else if (i > data.progress) {
                  return (
                    <div className={`row timeline-${i % 2 === 0 ? 'left' : 'right'}`}>
                      <div
                        className={`timeline-date flex items-center justify-center relative after:bg-no-repeat ${
                          i !== data.progress ? "after:bg-[url('/images/lock.svg')]" : 'after:bg-[#FF6D03]'
                        }`}
                      ></div>
                      <div>
                        <div className="timeline-box">
                          <div className="timeline-icon">
                            <i className="fa fa-gift"></i>
                          </div>
                          <div className="timeline-text">
                            <div className="grid gap-4">
                              <div className="flex items-start">
                                <img width="100%" src="/images/coversecod.png" alt="" />
                              </div>
                              <span className="bg-[#E2E8F0] w-24  rounded-lg flex items-center justify-center">
                                <span>Lesson 1</span>
                              </span>
                              <h3 className="font-bold text-lg  text-left">
                                Do you like street food do you like street food{' '}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div className={`row timeline-${i % 2 === 0 ? 'left' : 'right'}`}>
                      <div className="timeline-date flex items-center justify-center relative after:bg-no-repeat after:bg-[#FF6D03]"></div>
                      <div>
                        <div className="timeline-box">
                          <div className="timeline-icon">
                            <i className="fa fa-gift"></i>
                          </div>
                          <div className="timeline-text">
                            <div className="grid gap-4">
                              <span className="bg-[#E2E8F0] w-24  rounded-lg flex items-center justify-center">
                                <span>Lesson 1</span>
                              </span>
                              <h3 className=" font-bold text-lg  text-left">
                                Do you like street food do you like street food{' '}
                              </h3>
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
                              <img width="100%" src="/images/covermain.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
          </div>
          <div className="py-4 mt-6  bg-gradient-to-b from-[#E9E0D5] to-[rgba(233, 224, 213, 0)]">
            <div className="mx-auto">
              <div className="flex items-center gap-2 justify-center relatives after:absolute after:left-[52%] after:text-[#fff] after:bg-[#A89F96] after:rounded-full after:px-4 after:py-1 after:content-['Kế_Tiếp']">
                <Lock />
              </div>
              <div className="flex mt-8 items-center gap-2 justify-center bounce2">
                <img src="/images/cute.png" />
              </div>
              <div className="flex items-center gap-2 justify-center">
                <h3 className="font-bold">Cấp độ 2: Elementary</h3>
                <Question />
              </div>
              <div className="text-center my-4 mx-auto font-semibold bg-white w-[30%] p-4 rounded-lg">
                <h3 className="my-4">Tham gia bài kiểm tra để học vượt cấp</h3>
                <button className="rounded-xl  text-white px-4 py-2 bg-[#FF6D03]">Học Vượt</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
