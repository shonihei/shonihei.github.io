const state = {
    curSection: 1,
}

window.onload = () => {
    $('#projects').fullpage({
        css3: true,
        scrollingSpeed: 800,
        easingcss3: 'cubic-bezier(0.75,-0.5,0,1.2)',
        onLeave: (index, nextIndex, direction) => {
            updateState(state, {curSection: nextIndex}, props)
        }
    })
    const props = {}
    props.prevBtn = document.getElementById("prev-project-btn")
    props.nextBtn = document.getElementById("next-project-btn")
    
    const projects = document.getElementById('projects')
    let numOfProjects = 0
    for (let child of projects.childNodes) {
        if (child.nodeName === "DIV" && 
            child.classList.contains("section")) numOfProjects++
    }
    updateState(state, {numProjects: numOfProjects}, props)


    props.prevBtn.addEventListener('click', () => {
        updateState(state, {curSection: --state.curSection}, props)
        $.fn.fullpage.moveTo(state.curSection)
    })

    props.nextBtn.addEventListener('click', () => {
        updateState(state, {curSection: ++state.curSection}, props)
        $.fn.fullpage.moveTo(state.curSection)
    })
}

const updateState = (prevState, newState, props) => {
    Object.assign(prevState, newState)
    onStateChange(state, props)
}

const onStateChange = (state, props) => {
    if (state.curSection == 1) {
        props.prevBtn.classList.add('disabled')
    } else {
        props.prevBtn.classList.remove('disabled')
    }

    if (state.curSection == state.numProjects) {
        props.nextBtn.classList.add('disabled')
    } else {
        props.nextBtn.classList.remove('disabled')
    }
}