<?php
header('Content-Type: application/json');
echo json_encode([
  'remote_addr' => $_SERVER['REMOTE_ADDR'] ?? null,
  'xff' => $_SERVER['HTTP_X_FORWARDED_FOR'] ?? null,
  'x_real_ip' => $_SERVER['HTTP_X_REAL_IP'] ?? null,
  'cf_ip' => $_SERVER['HTTP_CF_CONNECTING_IP'] ?? null,
]);
