// ATLAS-106: Fraud check integration skeleton
// Blocked on: security-team API spec (awaiting review from @sec-eng)
// Status: WIP — do not merge until spec is finalized

export async function runFraudCheck(orderId, userId) {
  // TODO: replace stub with real call to fraud-detection-service
    // Spec doc: https://internal/docs/fraud-api (pending)
      console.warn('fraudCheck: stub implementation, not production-ready');
        return { approved: true, riskScore: null };
        }
