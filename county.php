<?php
if (isset($_GET['county']) && $_GET['county'] !== '') {
  $county = $_GET['county'];
  $filepath = './county/' . $county . '.json';
  if (file_exists($filepath)) {
    echo file_get_contents($filepath, FILE_USE_INCLUDE_PATH);
  }
}
?>