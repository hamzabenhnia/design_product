import { useState, useCallback } from 'react';
import { useAppDispatch } from './index';
import { useUI } from './index';

const useAPI = () => {
  const dispatch = useAppDispatch();
  const { showError, setLoading } = useUI();
  const [apiState, setApiState] = useState({
    loading: false,
    error: null,
    data: null
  });

  const callAPI = useCallback(async (apiCall, options = {}) => {
    const { 
      showLoading = true, 
      errorMessage = 'Erreur lors de la requête',
      successMessage = null 
    } = options;

    try {
      setApiState(prev => ({ ...prev, loading: true, error: null }));
      if (showLoading) {
        setLoading(true);
      }

      const result = await apiCall();
      
      setApiState(prev => ({ ...prev, loading: false, data: result }));
      
      if (successMessage) {
        // Vous pouvez ajouter une notification de succès ici si nécessaire
        console.log(successMessage);
      }

      return result;

    } catch (error) {
      const message = error.message || errorMessage;
      
      setApiState(prev => ({ 
        ...prev, 
        loading: false, 
        error: message 
      }));

      showError(message);
      
      throw error;

    } finally {
      if (showLoading) {
        setLoading(false);
      }
    }
  }, [dispatch, showError, setLoading]);

  // Méthodes spécifiques pour les opérations courantes
  const uploadFile = useCallback(async (file, folder = 'football-kits') => {
    const { uploadService } = await import('../services/api');
    return callAPI(() => uploadService.uploadFile(file, folder), {
      errorMessage: 'Erreur lors de l\'upload du fichier'
    });
  }, [callAPI]);

  const deleteFile = useCallback(async (publicId) => {
    const { uploadService } = await import('../services/api');
    return callAPI(() => uploadService.deleteFile(publicId), {
      errorMessage: 'Erreur lors de la suppression du fichier'
    });
  }, [callAPI]);

  return {
    // État
    loading: apiState.loading,
    error: apiState.error,
    data: apiState.data,

    // Méthodes principales
    callAPI,
    uploadFile,
    deleteFile,

    // Reset state
    reset: () => setApiState({ loading: false, error: null, data: null }),

    // Utilitaires
    hasData: !!apiState.data,
    hasError: !!apiState.error
  };
};

export default useAPI;