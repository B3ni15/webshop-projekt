import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

const login = () => {
    const redirect = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const code = params.get('code')

        if (code == null) {
            window.location.href = 'https://discord.com/oauth2/authorize?client_id=1229065166055014400&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&scope=identify'
        }

        async function getToken(code: string) {
            const response = await fetch(`http://213.136.90.151:2333/api/auth/callback?code=${code}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            return response;
        }

        const login = async () => {
            const res = await getToken(code!).then((res) => {
                return res.json()
            }).catch((err) => {
                console.error(err)
            })

            console.log(res.data)

            const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()

            document.cookie = `token=${res.data.access_token}; expires=${expires}; path=/`
            redirect('/shop')
        }

        login()
    }, [searchParams])
    return (
        <></>
    )
}

export default login
