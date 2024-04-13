import { useState, useEffect } from 'react';

function useAsync(asyncFunction) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const asyncData = async () => {
    setError(null);
    setData(null);

    try {
      const response = await asyncFunction();
      setData(response.data);
      return response;
    } catch (catchError) {
      // lint상 같은 스코프내에 같은 이름의 변수가 있는걸 지양한다네요.
      setError(catchError);
      return catchError;
    }
  };

  useEffect(() => {
    asyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { asyncData, error, data };
}

export default useAsync;
