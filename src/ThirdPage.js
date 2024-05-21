import React from 'react'

export default function ThirdPage() {
  return (
    <div class="thirdpage_container container">
      <div class="row justify-content-center">
        <div class="col-md-6 thirdpage_imagecontainer">
          {/* <div class="thirdpage_image"></div> */}
          <img src='gym_images/thirdpage.jpg' alt='image' class="img-fluid" />
        </div>
        <div class="col-md-6 thirdpage_content">
          <h2 class="trial_content_header">GET READY TO REACH YOUR FITNESS GOALS</h2>
          <p>
            Ditch the excuses and embrace the possibilities that lie beyond them.
            In the realm of fitness, excuses serve as barriers to progress, hindering the pursuit of our goals.
            Instead of succumbing to excuses like lack of time or motivation, it's time to reclaim our power and
            take ownership of our health journey.
            By letting go of excuses, we open ourselves up to a world of potential and opportunity.
            It's about prioritizing our health, making conscious choices, and embracing the journey towards a
            stronger, fitter version of ourselves. So, let go of the excuses, and let's embark on this
            empowering journey together.
          </p>
          <button class="thirdpage_btn">Free Trial</button>
        </div>
      </div>
    </div>

  )
}