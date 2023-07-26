import { appointments } from "./data";

function useRest({ baseURL }) {
  const get = async (endpoint) => {
    const url = `${baseURL}${endpoint}/`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const post = async (endpoint, values) => {
    const url = `${baseURL}${endpoint}/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    return data;
  }

  const put = async (endpoint, values) => {
    const url = `${baseURL}${endpoint}/${values.id}/`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    return data;
  }

  const deleteMethod = async (endpoint, id) => {
    const url = `${baseURL}${endpoint}/${id}/`;
    await fetch(url, { method: "DELETE" });
    return true;
  }

  return {
    get,
    post,
    put,
    deleteMethod
  }
}

function useNoLaboralesAR() {
  const { get } = useRest({ baseURL: 'http://nolaborables.com.ar/api/v2/feriados/' })

  const getEventsAr = async (year) => {
    const endpoint = `${year}`;
    const result = await get(endpoint)

    const events = result.map(event => {
      const mothIndex = event.mes - 1
      let endDate = new Date(year, mothIndex, event.dia)
      return {
        "title": event.motivo,
        "start": endDate,
        "end": endDate,
        "allDay": true
      }
    })
    return events
  }

  return {
    getEventsAr
  }
}

function useNager() {
  const { get } = useRest({ baseURL: 'https://date.nager.at/api/v3/' })

  const getEventsNager = async (year, countryCode) => {
    const endpoint = `LongWeekend/${year}/${countryCode}`;
    const result = await get(endpoint)
    const events = result.map(event => {
      let endDate = new Date(event.endDate)
      let startDate = new Date(event.startDate)
      return {
        "title": 'LongWeekend - ' + event.dayCount + ' days',
        "start": startDate,
        "end": endDate
      }
    })
    return events
  }

  const getCountries = () => {
    const endpoint = "AvailableCountries";
    return get(endpoint)
  }

  return {
    getEventsNager,
    getCountries
  }
}

function useDataSource(endpoint) {
  // http://129.151.117.160:11000/api/v1/customer/
  const { get, post, put, deleteMethod } = useRest({ baseURL: 'http://129.151.117.160:11000/api/v1/' })

  const create = async (data) => {
    const result = await post(endpoint, data)
    return result
  }

  const update = async (data) => {
    const result = await put(endpoint, data)
    return result
  }

  const getList = async () => {
    const result = await get(endpoint)
    return result
  }

  const getOne = async (id) => {
    const endpointRequest = `${endpoint}/${id}`;
    const result = await get(endpointRequest)
    return result
  }

  const save = async (data) => {
    if (data?.id) {
      update(data)
    } else {
      create(data)
    }
  }

  const deleteRecord = async (id) => {
    const result = await deleteMethod(endpoint, id)
    return result
  }

  return {
    getList,
    save,
    getOne,
    deleteRecord
  }
}

export function useService() {
  const customerService = useDataSource('customer')

  return {
    customerService
  }
}

export function useApi() {
  const { getEventsAr } = useNoLaboralesAR()
  const { getEventsNager, getCountries } = useNager()

  const getEvents = async (year, countryCode) => {
    if (countryCode === 'AR') return getEventsAr(year)
    return getEventsNager(year, countryCode)
  }

  return {
    getEvents,
    getCountries
  }
}
