import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('API Client', () => {
  const MOCK_API_KEY = 'test-api-key-123';
  const MOCK_API_URL = 'https://api.example.com';

  beforeEach(() => {
    vi.resetModules(); // Important to clear module cache
    // Stub env vars before importing the module
    vi.stubEnv('NEXT_PUBLIC_API_KEY', MOCK_API_KEY);
    vi.stubEnv('NEXT_PUBLIC_API_URL', MOCK_API_URL);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('should be configured with the correct base URL', async () => {
    const { apiClient } = await import('./client');
    expect(apiClient.defaults.baseURL).toBe(MOCK_API_URL);
  });

  it('should include the x-api-key header', async () => {
    const { apiClient } = await import('./client');
    expect(apiClient.defaults.headers['x-api-key']).toBe(MOCK_API_KEY);
  });

  it('should rely on process.env fallback if present', async () => {
    const { apiClient } = await import('./client');
    // This confirms the logic: 'x-api-key': API_KEY || ''
    expect(apiClient.defaults.headers['x-api-key']).toBeTruthy();
  });
});
