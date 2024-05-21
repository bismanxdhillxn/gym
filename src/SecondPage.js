import React from 'react'

export default function SecondPage () {
    return (
    <>
       <div class="secondpage_label" id="about">
            <h2>EXPLORE OUR PROGRAM</h2>
        </div>
        <div class="secondpage_container">
            <div class="explore_card">
                <i class="fas fa-dumbbell"></i>
                <h4>Strength Training</h4>
                <p>Unlock your potential with a dynamic strength training program for lasting fitness gains.</p>
                <div class="join">
                    <a href="#">Join Now<i class="material-symbols-outlined">arrow_right_alt</i></a>
                </div>
            </div>
            <div class="explore_card">
                <i class="material-symbols-outlined">self_improvement</i>
                <h4>Basic Yoga</h4>
                <p>Discover serenity and flexibility through this foundational, beginner-friendly yoga.</p>
                <div class="join">
                    <a href="#">Join Now<i class="material-symbols-outlined">arrow_right_alt</i></a>
                </div>
            </div>
            <div class="explore_card">
                <i class="fas fa-running"></i>
                <h4>Body Building</h4>
                <p>Transform your physique with a comprehensive bodybuilding regimen strength, size, and definition.
                </p>
                <div class="join">
                    <a href="#">Join Now <i class="material-symbols-outlined">arrow_right_alt</i></a>
                </div>
            </div>
            <div class="explore_card">
                <i class="material-symbols-outlined">scale</i>
                <h4>Weight Loss</h4>
                <p>Achieve sustainable weight loss through a balanced approach, combining nutrition, and
                    mindfulness.</p>
                <div class="join">
                    <a href="#"><span>Join Now</span><i class="material-symbols-outlined">arrow_right_alt</i></a>
                </div>
            </div>
        </div>
        </>
    )
  }