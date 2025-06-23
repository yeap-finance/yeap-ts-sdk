/**
 * Type definitions for Yeap Finance Client
 */

export interface ClientConfig {
  apiKey?: string;
  baseUrl?: string;
  timeout?: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface FinanceData {
  id: string;
  amount: number;
  currency: string;
  timestamp: Date;
} 