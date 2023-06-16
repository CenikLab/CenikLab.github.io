import { back2top } from '../components/back-to-top';
import { loadTooptip } from '../components/tooltip-loader';
import { loadDropdown } from '../components/dropdown-loader';
import { loadGrid } from '../components/masonry'

export function basic() {
  back2top();
  loadTooptip();
  loadDropdown();
  loadGrid();
}
