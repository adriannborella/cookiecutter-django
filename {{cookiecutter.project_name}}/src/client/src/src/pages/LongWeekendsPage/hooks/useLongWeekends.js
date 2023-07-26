import { useApi } from '../../../api'
import { useCallback, useEffect, useState } from 'react'

export function useLongWeekends() {
    const { getEvents } = useApi()
    const [data, setData] = useState([])
    const [countryCode, setCountryCode] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fillEvents = useCallback(async () => {
        setData([])
        if (!countryCode) {
            return
        }

        setIsLoading(true)
        const response = await getEvents(2023,countryCode)
        setData(response)
        setIsLoading(false)

    }, [getEvents, countryCode, isLoading])

    useEffect(() => {
        fillEvents()
    }, [countryCode])

    const refreshData = (countryCode) => {
        setCountryCode(countryCode)
    }

    return {
        data,
        isLoading,
        refreshData
    }
}
