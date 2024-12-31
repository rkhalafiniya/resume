function MainContent({employments,educations,certificates,hobbies}) {
    return (
        <div>
            {
             employments && employments.map((employment) => <Employment employment={employment}/>)
            }
            {
                educations && educations.map((education) => <Education education={education}/>)
            }
            {
                certificates && certificates.map((certificate) => <Certificate certificate={certificate}/>)
            }
        </div>
    )
}