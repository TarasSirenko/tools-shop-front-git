import Container from 'components/base/Container/Container';

import SearchForm from 'components/utils/SearchForm/SearchForm';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import StoresList from 'components/stors/StoresList/StoresList';
import StoresInfoCreateWrapper from 'components/stors/StoresInfoCreateWrapper/StoresInfoCreateWrapper';
import StoresInfoCreateForm from 'components/stors/StoresInfoCreateForm/StoresInfoCreateForm';

export default function StoresViews() {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  return (
    <Container>
      <SearchForm getAllStores={setStores} loading={setIsLoading} />
      <StoresList stores={stores} />

      <Routes>
        <Route
          path="create-store"
          element={
            <StoresInfoCreateWrapper>
              <StoresInfoCreateForm />
            </StoresInfoCreateWrapper>
          }
        />
      </Routes>
    </Container>
  );
}
