/**
 * Data Processing Utility: Contains complex logic for data aggregation and score calculation.
 */

/**
 * A utility log function for the backend.
 */
function log(message) {
    console.log(`[UTILITY LOG] ${new Date().toISOString()}: ${message}`);
}

/**
 * Recalculates the Emotional Learning Score (ELS) based on a user's entire history.
 * @param {Array<Object>} history - Array of decision and emotion logs.
 * @returns {number} The new calculated ELS score (0-100).
 */
function recalculateEls(history) {
    if (!history || history.length === 0) return 75.0;

    let totalWeightedScore = 0;
    let totalDecisions = history.length;

    for (const log of history) {
        // Weighted logic: Sustainable + Focused = highest weight
        let score = 0;

        if (log.decision === 'sustainable') {
            score = 10;
        } else if (log.decision === 'fix') {
            score = 2;
        } else {
            score = 5;
        }

        // Apply emotional multiplier: Focus gives a huge bonus
        if (log.emotion === 'Focus') {
            score *= 1.5; 
        } else if (log.emotion === 'Distress') {
            score *= 0.7; // Penalty for making a decision while stressed
        }
        
        totalWeightedScore += score;
    }

    // Normalize the score to a 0-100 scale, relative to a max possible score
    const maxPossibleScore = totalDecisions * 15; // Max score is 10 * 1.5
    const rawEls = (totalWeightedScore / maxPossibleScore) * 100;

    return Math.round(rawEls * 10) / 10; // Round to one decimal place
}

module.exports = {
    recalculateEls,
    log,
    // Other data utilities (e.g., cleanInputData, validateSchema)
};
