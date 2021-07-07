export function validateEmail(email) {
  //eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export async function validatePhone(phone) {
  //eslint-disable-next-line
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  if (re.test(phone)) {
    return await checkPhone(phone).then(res => {
      return res.status !== 404
    })
  } else {
    return false
  }
}

export async function checkPhone(phone) {
  const endPoint = 'https://hidden-meadow-85444.herokuapp.com/lookup/'
  const result = await fetch(`${endPoint}?phone=${phone}`)
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('phone validation error: ', error)
    })
  return result
}

export function leadId() {
  if (!document.getElementById('LeadiDscript_campaign')) {
    const s = document.createElement('script')
    s.id = 'LeadiDscript_campaign'
    s.type = 'text/javascript'
    s.async = true
    s.src =
      '//create.lidstatic.com/campaign/cd215e19-865f-3649-c858-0b6646c7cfa9.js?snippet_version=2'
    document.head.appendChild(s)
  }
}
