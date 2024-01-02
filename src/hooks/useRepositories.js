import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

    const repositoriesQuery = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        // Other options
      });
    
      const isLoading = repositoriesQuery.loading;
      const repositories = isLoading ? null : repositoriesQuery.data?.repositories || null;
    
      return { repositories };
};

export default useRepositories;