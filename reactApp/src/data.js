function fetchJSONFile(path) {
    let response = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText)
                    resolve(data)
                } else {
                    reject(new Error('Failed to fetch JSON file: ' + xhr.status))
                }
            }
        };
        xhr.open('GET', path, true)
        xhr.send()
    })
    return response.then(data => data).catch(() => false)
}
async function getData() {
    let data = await fetchJSONFile('./data.json')

    if (data){
        return data
    }
    return {
        address: 'some dummy',
        name: 'Max Mustermann',
        phoneNumber: '+49 12341561',
        jobTitle: 'Full-Stack Developer',
        jobDescription: 'Very Nice ....',
        email: 'maxmuster@gmail.com',
        employments: [
            {
                from: '',
                to: '',
                title: '',
                description: '',
                tasks: [],
                achievements: [],
            }
        ],
        skills: [
            {
                name: '',
                level: '',
            },
        ],
        educations: [
            {
                from: '',
                to: '',
                description: '',
                institute: '',
                location: '',
                achievements: [],
            },
        ],
        certificates: [
            {
                date: '',
                title: '',
                location: '',
            },
        ],
        languages: [
            {
                name: '',
                level: '',
            },
        ],
        hobbies: [
            {
                name: '',
                category: '',
            },
        ]
    }
}