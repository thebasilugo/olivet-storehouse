import { NextResponse } from "next/server"

export async function GET() {
  // Check database connection
  const dbStatus = await checkDatabaseConnection()

  // Check external services
  const paymentServiceStatus = await checkPaymentService()

  // Check application status
  const appStatus = {
    status: "healthy",
    version: process.env.APP_VERSION || "1.0.0",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  }

  // Overall health status
  const isHealthy = dbStatus.healthy && paymentServiceStatus.healthy

  return NextResponse.json(
    {
      healthy: isHealthy,
      database: dbStatus,
      paymentService: paymentServiceStatus,
      application: appStatus,
    },
    {
      status: isHealthy ? 200 : 503,
    },
  )
}

async function checkDatabaseConnection() {
  try {
    // In a real app, you would check your actual database connection
    // For this example, we'll simulate a successful connection
    return {
      healthy: true,
      latency: 15, // ms
      message: "Connected successfully",
    }
  } catch (error) {
    return {
      healthy: false,
      error: error instanceof Error ? error.message : "Unknown database error",
      message: "Failed to connect to database",
    }
  }
}

async function checkPaymentService() {
  try {
    // In a real app, you would check your payment service
    // For this example, we'll simulate a successful connection
    return {
      healthy: true,
      latency: 120, // ms
      message: "Payment service is operational",
    }
  } catch (error) {
    return {
      healthy: false,
      error: error instanceof Error ? error.message : "Unknown payment service error",
      message: "Failed to connect to payment service",
    }
  }
}
