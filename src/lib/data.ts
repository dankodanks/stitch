export type Subscription = {
  id: string;
  name: string;
  price: number;
  billingCycle: 'Weekly' | 'Monthly' | 'Annually';
  nextPaymentDate: string;
  category: string;
  logoUrl: string;
  startDate?: string;
  paymentMethod?: string;
  paymentHistory?: { date: string; amount: number }[];
  notes?: string;
};

export const subscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Netflix',
    price: 15.49,
    billingCycle: 'Monthly',
    nextPaymentDate: '2024-12-03',
    category: 'Entertainment',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiTgMxqIvOt73CUAZhTzqWCm5QnN6kxvneTd3haSXLlvnAy6AJwaZ84lxHy3hUdIyQNO9u7vbJmlflEYgDk_fTDMAAu1U5hcMaCtfbfwbXCfIiP3KFO08OgWYT2NkHimG1AcTHJ_MVSih13aL3ILitsV50k9FaHZ9vyKslQrzelMjpImXVkcz09YNzeJLl8upmB9YiYzNvk2iuisim-4ZA1qqxynpQUf2DEnP_C3no-ZDjuLLULfTdS1u1kD8xA93imU8o07tlKaSE',
  },
  {
    id: '2',
    name: 'Spotify',
    price: 10.99,
    billingCycle: 'Monthly',
    nextPaymentDate: '2024-12-05',
    category: 'Music',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYWXhQ02MwBvDXNtRGkzIlUDQvrL7sKdwv8a2w1hFtvodTmof2l6o4lnU_RpK_LALGmN2-QXBdRdpUumzncwVt_4ahLCj7N9udcBOr46_NJU72T3rpPJQQVr3o7JcQTkSr9eclnFTWLeF_RYsKehXrQFgbUziWR1dVL9dawUNSzCaWq6aAH7Q2S5QBTgrOF7j6eexPv7gcdZz0qacU0gkYcCX6uR1badpG17o-bq4RYNneWerXPqQ3c73qD-7k5xnaqdlvEo9Pkiv9',
  },
  {
    id: '3',
    name: 'YouTube Premium',
    price: 13.99,
    billingCycle: 'Monthly',
    nextPaymentDate: '2024-10-15',
    category: 'Entertainment',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnxrLxBIWUOJsWqEuGMNk9bCY_1u9C_6VYZAW5sZjyv25AJg8sQ7R8LItA3gDkhkUMwT7YXzIsw56J2KIn-0ppXRLJ-deOM7P7oem4D-sYs5ZEpiug6mNnFUPqtSo5nG7HvRXVEgoyeMSWwTTAsaYezOURCvcp43Y0p2ssbrr7Lfs3-OqGRNiGF8ujdmXDR_F1504JzNSAbOn9WiegvxgqueR_5GVFgigOLDfnE5a-mvPXQXu7-ibAzTSLKSvVwsLB2HNEz4igzKys',
  },
  {
    id: '4',
    name: 'iCloud+',
    price: 2.99,
    billingCycle: 'Monthly',
    nextPaymentDate: '2024-10-18',
    category: 'Utilities',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_AgIAdYDl_bojkMpc5kvoAa-49BYPJ06YOVO5HhBLyBkPCZNOsYWLAv5mr8ahuCJEfr5If9WW7G-TzXGMk5WwXeUJeokug9cQhHIxGbX659n8qIWodjTu4JO_Xhq8KWIP4ZxKXhoXB-vOQQERvRFieV7yH-mxr4hFhpT2BvsaNEfR7yBlOGvYpFzwLHOqJ0e7RcUzvtrpXhrdVFxgz6PKFU4DqHbDsVjwGMxTgDt0hjWnlYszgXMZs6W7M8iqmw-_n1AhfTyFK3rx',
  },
  {
    id: '5',
    name: 'Adobe CC',
    price: 54.99,
    billingCycle: 'Monthly',
    nextPaymentDate: '2024-10-21',
    category: 'Work',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiUi3bTyPIE88KTYjkG1fueWkaMDLlt5qkkDSG_bGhsgNFrNg6BFfsGgbd0ZC57TUV4d4oNg8WN6UKBwk6gb9wZ7SB5HJXHwr7dtX7JmU96rQ04Ejx71DfU1wKBdhS6_ydXgBlyvlxR3-bmHc6ulu-B55aQMNJksWfNHI6ibJ_SJvPXVlolMwvU4bprW6z-OFP8rPuEGKKccdrNDt0kMd2Q4bDHr1XfIvMHceBYXcivHHcLhuAxYiLv19sCJ4ZK_SBVTr_1hWwD5AL',
  },
  {
    id: '6',
    name: 'Microsoft 365',
    price: 6.99,
    billingCycle: 'Monthly',
    nextPaymentDate: '2024-10-25',
    category: 'Work',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC67QzgH47y5LrVNvgVmTXOl_3zu7XIj-2syOusguFfIyvSFXzCtEgnvzBSIeG7M1i6-84jej3Ptb3lLll-1YRoknZejgtIGMxeLxDPcI7DJxGHpjXNUVy289RyLN0qiCPJ6JoDm3w9j_8zN7nUvvoxQzcR-mXET_E5bg9cP8E_K8BjHacsJQI6eRA4KJWSRHGaqIvE4X9UpZ8NriGMG2gTkmg4Y1GyhpAgk4yJmYhRZiNifqCER2QRUrqZr0ys9MapqdqPPckBeIL3',
  },
];
