export type DriverLead = {
  name: string;
  email: string;
  phone: string;
  city: string;
};

/**
 * Envía el formulario "Publica tu próximo viaje" a Trayko-worker
 * (POST /leads/conductor), que reenvía la info por correo vía Resend.
 */
export async function submitDriverLead(lead: DriverLead): Promise<void> {
  const workerUrl = import.meta.env.PUBLIC_WORKER_URL;
  if (!workerUrl) {
    throw new Error('missing_worker_url');
  }

  const response = await fetch(`${workerUrl}/leads/conductor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    throw new Error(`lead_submit_failed_${response.status}`);
  }
}
