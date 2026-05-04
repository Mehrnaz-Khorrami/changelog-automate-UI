
export const buildQuery = (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return query ? `?${query}` : ''
  }